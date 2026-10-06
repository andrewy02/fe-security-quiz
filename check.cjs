const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(require('node:path').join(__dirname, 'index.html'), 'utf8');
const context = vm.createContext({});
for (const id of ['questions-source','engine-source']) {
  const code = html.match(new RegExp('<script id="'+id+'">([\\s\\S]*?)</script>'));
  assert.ok(code, 'Missing source script: '+id);
  vm.runInContext(code[1], context);
}
assert.equal(context.QUIZ_DATA.length, 3);
const ids = new Set();
for (const level of context.QUIZ_DATA) {
  assert.equal(level.questions.length, 5);
  for (const q of level.questions) {
    assert.ok(!ids.has(q.id)); ids.add(q.id);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
    assert.ok(q.explanation.length > 30);
  }
  const grade = context.QuizEngine.summarize;
  assert.equal(grade(level.questions, level.questions.map(q => q.answer)).score, 100);
  assert.equal(grade(level.questions, level.questions.map(q => (q.answer+1)%4)).score, 0);
  const mixed = grade(level.questions, level.questions.map((q,i) => i<3 ? q.answer : (q.answer+1)%4));
  assert.equal(mixed.score, 60);
  assert.equal(mixed.wrong.length, 2);
  assert.equal(grade(mixed.wrong, mixed.wrong.map(q=>q.answer)).score, 100);
}
assert.equal(ids.size, 15);
assert.ok(html.includes('id="main"'));
console.log('PASS: 3 levels / 15 questions / 4 choices / explanations / grading / incorrect-answer retry');
  
