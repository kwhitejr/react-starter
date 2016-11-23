/*************
*
* id: [phase, day] (week is irrelevant)
* title: String - describes the workout in sum
* exercises: Array of Objects
*   name: String - describes the specific exercise
*   reps: Array of Numbers - array length is number of sets, array values are the reps for that set
*   track: String - the type of input to track (i.e. lbs kgs rep#)
*************/

export default [
  {
    id:     [1,1], 
    title:  'Back & Rear Deltoids',
    exercises: [
      {
        name: 'deadlifts',
        reps: [10,8,6,4],
        track: 'weight',   
      },
      {
        name: 'pullups',
        reps: [10,10,10,10],
        track: 'reps',
      },
      {
        name: 'single arm dumbbell row',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 't-bar row',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'barbell facepulls',
        reps: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'bent-over lateral raises',
        reps: [15,15,15],
        track: 'weight',
      },
    ]
  },
  {
    id:     [1,2], // [phase,day]
    title:  'Chest & Front Deltoids',
    exercises: [
      {
        name: 'incline dumbbell press',
        reps: [12,10,8,8],
        track: 'weight',
      },
      {
        name: 'barbell flat press',
        reps: [10,8,8,6],
        track: 'weight',
      },
      {
        name: 'landmine press',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'dumbbell flys',
        reps: [15,15,15],
        track: 'weight',
      },
      {
        name: 'dumbbell upright rows',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'alternating dumbbell front raises',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'lateral raises',
        reps: [12,12,12],
        track: 'weight',
      },
    ]
  },
  {
    id:     [1,3], // [phase,day]
    title:  'Legs & Calves',
    exercises: [
      {
        name: 'squats',
        reps: [12,10,8,6],
        track: 'weight',
      },
      {
        name: 'walking lunges',
        reps: [10,10,10],
        track: 'weight',
      },
      {
        name: 'romanian deadlifts',
        reps: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'glute bridges',
        reps: [10,10,10],
        track: 'weight',
      },
      {
        name: 'kettle bell swings',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'seated calf raises',
        reps: [10,10,10,10,10],
        track: 'weight',
      },
    ]
  },
  {
    id:     [1,4],
    title:  'Arms & Traps',
    exercises: [
      {
        name: 'close grip press',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'skull crushers',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'kick backs',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'underhand pull down',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'barbell curls',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'alernating hammer curls',
        reps: [10,10,10],
        track: 'weight',
      },
      {
        name: 'barbell shrug',
        reps: [10,10,10,10,10],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,1], // [phase,day]
    title:  'Legs & Calves',
    exercises: [
      {
        name: 'squats',
        reps: [12,10,8,6,4],
        track: 'weight',
      },
      {
        name: 'step-ups',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'trap bar deadlifts',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'lateral box squats',
        reps: [10,10,10],
        track: 'reps',
      },
      {
        name: 'romanian deadlifts',
        reps: [10,10,10],
        track: 'weight',
      },
      {
        name: 'seated calf raises',
        reps: [12,12,12,12],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,2], // [phase,day]
    title:  'Back, Traps, & Biceps',
    exercises: [
      {
        name: 'deadlifts',
        reps: [10,8,6,4],
        track: 'weight',
      },
      {
        name: 'bent-over row',
        reps: [8,8,8,8],
        track: 'weight',
      },
      {
        name: 'v-grip pullups',
        reps: [8,8,8,8],
        track: 'reps',
      },
      {
        name: 'dumbbell pull-overs',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'dumbbell shrugs',
        reps: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'drag curls',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'incline bench dumbbell curls',
        reps: [12,12,12],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,3], // [phase,day]
    title:  'Chest & Triceps',
    exercises: [
      {
        name: 'dumbbell press',
        reps: [12,10,8,8],
        track: 'weight',
      },
      {
        name: 'incline barbell press',
        reps: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'single-arm dumbbell press',
        reps: [10,10,10],
        track: 'weight',
      },
      {
        name: 'incline dumbbell fly',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'single-arm dumbbell french press',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'cross bench dips',
        reps: [10,10,10],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,4], // [phase,day]
    title:  'Deltoids & Forearms',
    exercises: [
      {
        name: 'overhead press',
        reps: [12,10,8,6],
        track: 'weight',
      },
      {
        name: 'single-arm kettlebell press',
        reps: [10,10,10],
        track: 'weight',
      },
      {
        name: 'reverse upright row',
        reps: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'lateral raises',
        reps: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'reverse curls',
        reps: [12,12,12],
        track: 'weight',
      },
      {
        name: 'finger curls',
        reps: [12,12,12],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,5], // [phase,day]
    title:  'Legs & Calves',
    exercises: [
      {
        name: 'front squats',
        reps: [12,10,8,6],
        track: 'weight',
      },
      {
        name: 'glute bridges',
        reps: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'split squats',
        reps: [8,8,8,8],
        track: 'weight',
      },
      {
        name: 'single leg romanian deadlifts',
        reps: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'standing calf raises',
        reps: [12,12,12,12],
        track: 'weight',
      },
    ]
  },
]