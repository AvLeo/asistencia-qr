const alumnos = require('./data/alumnos.json')
const { format } = require('@formkit/tempo')
const date = new Date()
const day = format(date, "full").split(',')
const hour = format(date, {time:"short"}).split(':')

console.log(day)
console.log(hour)
console.log(day[0])
console.log(hour[0])

const setAsis = (IdAlumno, day, hour) =>{
    alumnos.forEach(array => {
        if(array.alumnos[IdAlumno]?.days){
        
            if(array.alumnos[IdAlumno].days[day]){

                if(array.alumnos[IdAlumno].days[day][hour])

                    console.log(array.alumnos[IdAlumno].days[day][hour])
                    // Function(IdAlumno, day, curso)
                    
                }
        }
    });
}

setAsis('1011', day[0], "17")