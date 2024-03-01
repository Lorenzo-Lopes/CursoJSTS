const alunos = ['Lorenzo','Boony','Rapha','André','Djalma'];// definição de uma array
console.log('array completa -->'+ alunos, typeof alunos)
console.log(alunos instanceof String) // instanceof >> verifica tipo do objeto
 alunos.pop();
 console.log('Array dps do POP -->'+ alunos);
 alunos.push('Djalma Denovo')
 console.log('Array depois do PUSH -->'+ alunos)

 delete alunos[2]
 console.log('Array depois de deleta um elemento'+alunos);
 console.log(alunos,alunos.length)
 alunos[2] = 'Mayke'
 console.log(alunos)

 console.log(alunos.slice(0,-1));

 alunos.unshift('Guilherme')// adiciona no começo
 console.log(alunos)

 alunos.shift()
 console.log(alunos)

