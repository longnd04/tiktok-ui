import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRotes } from "~/routes"
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRotes.map((route, index) => {
                        const Page = route.component

                        let Layout = DefaultLayout
                        if(route.layout){
                            Layout = route.layout
                        }
                        else if(route.layout === null){
                            Layout = Fragment
                            console.log(Fragment);
                        }
                        return (
                            <Route key={index} path={route.path} element={
                                <Layout>
                                    <Page />
                                </Layout>
                            } />
                        )
                    })}
                </Routes>

            </div>
        </Router>
    );
}

export default App;
