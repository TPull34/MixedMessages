
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

const setsAndReps = ['3x10', '5x5', '4x10', '4x8'];

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
            break
        default:
            return -1;
        
    }
}

const createWorkout = (day) => {

    for (let i = 0; i < 6; i++)
    {

    }
    if(day === 'Sunday')
    {
        return 'Rest Day';
    }
    else if(day === 'Saturday' || day === 'Wednesday')
    {
        return 'Leg Day';
    }
    else if(day === 'Monday' || day === 'Thursday')
    {
        return 'Chest & Tricep Day';
    }
    else if(day === 'Tuesday' || day === 'Friday')
    {
        return 'Back & Bicep Day';
    }
}

const randomSelect  = (arr) =>
{
    const emptyArr = [];
    for (let i = 0; i < 3; i++)
    {
        let randIndex = Math.floor(Math.random() * arr.length);
        while (emptyArr.includes(arr[randIndex]))
        {
            console.log('you are here');
            randIndex = Math.floor(Math.random() * arr.length);
        }
       
        emptyArr.push(arr[randIndex]);
        
    }
    return emptyArr;
}


console.log(createWorkout(convertDayToString()));  
console.log(randomSelect(chestWorkouts));       


