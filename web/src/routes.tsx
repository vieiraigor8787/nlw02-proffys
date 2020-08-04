import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Lading from './pages/Lading';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeachForm';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Lading} />
			<Route path='/study' exact component={TeacherList} />
			<Route path='/give-classes' exact component={TeacherForm} />
		</BrowserRouter>
	);
};

export default Routes;
