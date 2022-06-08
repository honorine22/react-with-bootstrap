import React, { useState } from 'react';
import GoalList from './GoalList';
import NewGoal from './NewGoal';
const App = () => {
  const [goals, setGoals] = useState([
    { key: 1, title: "React Native" },
    { key: 2, title: "Javascript" },
    { key: 3, title: "React and Redux" },
  ])
  const onAddGoal = newGoal => {
    setGoals(goals => goals.concat(newGoal))
  }

  return (
    <div className="container gr mt-5">
      <div class="col-xs-1-12">
        <NewGoal onAddGoal={onAddGoal} />
        <GoalList goals={goals} />
      </div>
    </div>
  );
};

export default App;
