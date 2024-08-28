let name1 = prompt('Escreva seu nome.')
const power = parseInt(prompt('Escreva o dano de seu ataque.'))

let name2 = prompt('Escreva o nome do defensor.')
let life = parseInt(prompt('Escreva a quantidade de vida do defensor.'))
const defense = parseInt(prompt('Escreva a defesa do defensor.'))
const shield = confirm('O defensor possui escudo?.')

const damage = power > defense ? (shield ? (power - defense) / 2 : power - defense) : 0
const lifeAfterDamage = Math.max(life - damage, 0)

if (damage > 0) {
    if (shield) {
        alert(`${name1} atacou. ${name2} sofreu ${damage} de dano por possuir escudo. Sua vida agora é ${lifeAfterDamage}.`)
    } else {
        alert(`${name1} atacou. ${name2} sofreu ${damage} de dano por não possuir escudo. Sua vida agora é ${lifeAfterDamage}.`)
    }
} else {
    alert(`${name1} atacou, mas não afetou ${name2}. Nenhum dano causado!`)
}