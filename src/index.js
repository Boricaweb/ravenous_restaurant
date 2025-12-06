import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import BusinessList from './BusinessList';
import reportWebVitals from './reportWebVitals';

const Loading = () => <h1>Loading...</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
    <BusinessList />
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
