Your job is to design and build a React application that includes at least two components: Display and Dashboard. For the MVP you only need to record information about a player's "at bat".

Count Rules

    balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
    balls and strikes reset to 0 when a hit is recorded.
    a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

Display

    display the count of balls and strikes for the at-bat.
    should be updated when the user records activity on the Dashboard component.

Dashboard

    provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
    there is NO need to specify the type of hit (single, double, etc).
    changes recorded on this component should update the information shown by the Display component.
