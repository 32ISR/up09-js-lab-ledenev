let sentence = "  javascript — это просто!  ";
sentence = sentence.trim();
sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
console.log(sentence);

const lastName = "Сергеев"
const firstName = "Александр"
const group = "32ИСР"
const gpa = "4.2"
const studentInform = `Студент: ${lastName} ${firstName}, группа: ${group}, средний балл: ${gpa}`;
console.log(studentInform);

const dateStr = "2025-03-15";
const parts = dateStr.split("-")
const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
console.log(formattedDate);

const numberAccount = "42";
const formattedAccount = String(numberAccount).padStart(8, "0"); 
console.log(formattedAccount);