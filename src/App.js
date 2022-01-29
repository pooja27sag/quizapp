import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import { useState } from "react";
import Data from "./Data";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = () => {};
  console.log(Data);
  setQuestions(Data);
  console.log(questions);

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz" exact>
            <Quiz
              name={name}
              Data={Data}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result" exact>
            <Result />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
