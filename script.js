
//Setting up Arrays with various workouts to be randomly selected every day of the week 
//based on what day it is. Workouts will be select on a PPL split
const chestWorkouts = ['Barbell Bench', 'Incline Barbell Bench', 'Decline Barbell Bench', 'Dumbbell Fly',
                        'Dumbbell Bench', 'Incline Dumbbell Bench', 'Push-Ups', 'Pec Deck', 'Dumbbell Hex Press'];

const backWorkouts = ['Pull-Ups', 'Seated Rows', 'Lat Pull-Down', 'Deadlift', 'Reverse Pec Deck', 
                        'Single Arm Cable Pull Downs', 'Dumbbell Rows', 'Dumbbell Pull-Over', 'Bent Over Rows'];
                    
const legWorkouts = ['Back Squat', 'Walking Lunges', 'RDL', 'Sumo Deadlift', 'Leg Curls', 'Leg Extensions', 'Front Squat',
                        'Glute Bridge', 'Hack Squat', 'Leg Press'];

const shoulderWorkouts = ['Barbell Military Press', 'Front Raises', 'Side Raises', 'Dumbbell Military Press', 'Barbell Shrugs',
                            'Arnold Press', 'Reverse Flys', 'Y Raises', 'Dumbbell Shoulder Press', 'Dumbbell Upright Row'];

const bicepWorkouts = ['Alternating Curls', 'Hammer Curls', '21\'s', 'Incline Curls', 'Barbell Curls', 'Hammer Rope Curls',
                        'Reverse Barbell Curls', 'Cable Curls', 'Decline Curl', 'Zottman Curl'];

const tricepWorkouts = ['Tricep Kickbacks', 'Single Arm Overhead Extensions', 'Cable Rope Push Downs', 'Skull Crushers',
                            'Dips', 'Cable Rope Overhead Extensions', 'Diamond Push Ups', 'Close Grip Bench Press'];

const forearmWorkouts = ['Dumbbell Wrist Flexion', 'Dumbbell Wrist Extension', 'Reverse Curl', 'Farmer\'s Walk'];

const cardioWorkouts = ['Bicycle', 'Incline Walk', 'Run', 'Stair Master', 'Elliptical'];

const abdominalWorkouts = ['Crunches', 'Bicycle Kicks', 'Leg Lifts', 'Scissor Kicks', 'Captains Chair', 'Planks', 'Sit Ups',
                            'Russian Twists'];

const setsAndReps = ['3x10', '5x5', '4x10', '4x8', '3x15', '2x30'];

const inspirationalMsg = ['No pain, no gain. Shut up and train.', 'Your body can stand almost anything. It’s your mind that you have to convince.',
                    'Success isn’t always about greatness. It’s about consistency. Consistent hard work gains success. Greatness will come.',
                    'Train insane or remain the same','Definition of a really good workout: when you hate doing it, but you love finishing it.',
                    'Push yourself because no one else is going to do it for you', 'Suck it up. And one day you won’t have to suck it in.',
                    'Success starts with self-discipline.', 'Good things come to those who sweat.', 'Motivation is what gets you started. Habit is what keeps you going']

//Cardio range from 10 to 40 minutes
const cardioLength = Math.floor((Math.random() * 30) + 10);

//Get a random item from setAndReps array
let randomSets = Math.floor(Math.random()* setsAndReps.length)
const titleBreak = '\n===================\n'
//Get the day of the week.
function getDay (){
    const dayOfWeek = new Date();
    return dayOfWeek.getDay();
};
//Convert day to a string
const convertDayToString = () =>
{
    switch(getDay())
    {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return  'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3: 
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        default:
            return -1;
        
    }
}

const createWorkout = (day) => {
    if(day === 'Sunday')
    {
        return 'Rest Day';
    }
    else if(day === 'Saturday' || day === 'Wednesday')
    {
        let workout = randomSelect(legWorkouts);
        let reps = repRange(workout)
        const finalForm = []
        for(let i = 0; i < workout.length; i++)
        {
            finalForm.push(`${workout[i]}: ${reps[i]}\n`) 
        }

        return 'Leg Day' +`${titleBreak}` + randomMsg(inspirationalMsg) + `${titleBreak}` + finalForm.join('') + `${titleBreak}` + willHaveAbs() + `${titleBreak}` + willHaveCardio();
    }
    else if(day === 'Monday' || day === 'Thursday')
    {
        let workout = randomSelect(chestWorkouts);
        let reps = repRange(workout);
        let workout2 = randomSelect(tricepWorkouts);
        let reps2 = repRange(workout2);
        const finalForm = []
        for(let i = 0; i < workout.length; i++)
        {
            finalForm.push(`${workout[i]}: ${reps[i]}\n`) 
        }
        for(let j = 0; j < workout2.length; j++)
        {
            finalForm.push(`${workout2[j]}: ${reps2[j]}\n`)
        }

        return 'Chest & Tricep Day'+`${titleBreak}` + randomMsg(inspirationalMsg) + `${titleBreak}` + finalForm.join('') + `${titleBreak}` + willHaveAbs() + `${titleBreak}` + willHaveCardio();
    }
    else if(day === 'Tuesday' || day === 'Friday')
    {
        let workout = randomSelect(backWorkouts);
        let reps = repRange(workout);
        let workout2 = randomSelect(bicepWorkouts);
        let reps2 = repRange(workout2);
        const finalForm = []
        for(let i = 0; i < workout.length; i++)
        {
            finalForm.push(`${workout[i]}: ${reps[i]}\n`) 
        }
        for(let j = 0; j < workout2.length; j++)
        {
            finalForm.push(`${workout2[j]}: ${reps2[j]}\n`)
        }
        return 'Back & Bicep Day'+`${titleBreak}` + randomMsg(inspirationalMsg) + `${titleBreak}` + finalForm.join('') + `${titleBreak}` + willHaveAbs() + `${titleBreak}` + willHaveCardio();
    }
}
//select 3 random workouts from the provided array.
const randomSelect  = (arr) =>
{
    const emptyArr = [];
    if(arr === legWorkouts)
    {
        for (let i = 0; i < 5; i++)
        {
            let randIndex = Math.floor(Math.random() * arr.length);
            while (emptyArr.includes(arr[randIndex]))
            {
                randIndex = Math.floor(Math.random() * arr.length);
            }
           
            emptyArr.push(arr[randIndex]);
            
        }

    }
    else
    {
        for (let i = 0; i < 3; i++)
        {
        let randIndex = Math.floor(Math.random() * arr.length);
        while (emptyArr.includes(arr[randIndex]))
        {
            randIndex = Math.floor(Math.random() * arr.length);
        }
       
        emptyArr.push(arr[randIndex]);
        
        }
    }
    
    return emptyArr;
}

const willHaveAbs = () =>
{
    let haveAbs = Math.floor(Math.random() * 2);
    if(haveAbs === 1)
    {
        let workout = randomSelect(abdominalWorkouts);
        let reps = repRange(workout);
        let emptyArr = [];
        for(let i = 0; i < workout.length; i++)
        {
            emptyArr.push(`${workout[i]}: ${reps[i]}\n`);
        }
        
        return emptyArr.join('');
    }
    else
    {
        return 'You got lucky no abs today';
    }
}

const willHaveCardio = () =>
{
    let haveCardio = Math.floor(Math.random() * 2);
    if(haveCardio === 1)
    {
        let workout = randomSelect(cardioWorkouts);
        let emptyArr = [];
        for(let i = 0; i < 1; i++)
        {
            emptyArr.push(`${workout[i]}: ${cardioLength} Minutes\n`);
        }
        
        return emptyArr.join('');
    }
    else
    {
        return 'You got lucky no cardio today';
    }
}


const repRange = (arr) =>
{
    let newArr = []
    for(let i = 0; i < arr.length; i++)
    {
        let randIndex = Math.floor(Math.random() * arr.length);
        newArr.push(setsAndReps[randIndex]);
    }
    return newArr
}

const randomMsg = (arr) => 
{
    let randIndex = Math.floor(Math.random() * arr.length)
    return arr[randIndex]
}

console.log(createWorkout(convertDayToString()));  

