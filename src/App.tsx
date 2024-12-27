import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainMenuPage} from "./pages/MainMenuPage";
import {UsersPage} from "./pages/UsersPage";
import {UserBreakdown} from "./pages/UserBreakdown";
import {ChoresPage} from "./pages/ChoresPage";
import {ChoreForm} from "./components/ChoreForm";
import {UserForm} from "./pages/UserForm";
import {NewChorePage} from "./pages/NewChorePage";


interface UnimplementedPageProps {
    routeToPage?: string;
}
export function UnimplementedPage(props: UnimplementedPageProps) {
    return(<div>Sorry, but {props.routeToPage ?? "this page"} is not implemented yet. Go fix that!</div>)
}

function App() {

  return (
        <div id="app" className="center-app">
            <Routes>
                <Route path="/" element={<MainMenuPage/>} />

                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/chores" element={<ChoresPage/>}/>

                <Route path="/users/breakdown" element={<UserBreakdown/>}/>


                <Route path="/chores/chore-form" element={<NewChorePage/>}/>
                <Route path="/users/user-form" element={<UserForm/>}/>
            </Routes>
        </div>
  );
}
export default App;


// export function WelcomePage() {
//     return (
//         <div>WELCOME</div>
//     );
// }
