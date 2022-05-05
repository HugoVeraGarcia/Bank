import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { login } from '../../store/actions/user.actions';

// Component
import Input from '../../components/ui/input/input.component';
import Button from '../../components/ui/button/button.component';
import Form from '../../components/ui/form/form.component';

import classes from './login.module.css';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const users = useSelector(state => state.users)

	// Refs
	const accountInputRef = useRef();
	const passwordInputRef = useRef();
	
	const submitHandler = e => {
		e.preventDefault();

		const credentials = {accountNumber: accountInputRef.current.value, password: passwordInputRef.current.value};
		
		dispatch(login(credentials));

		if (users.isAuth) {
			console.log('autorizado', users.isAuth);
			navigate('/');
		}
	};

	const onSignup = () => {
		navigate('/signup');
	};

	const header = 'To enter our app, please fill these fields';

	return (
		<div className={classes.container}>
			<Form header={header} submitHandler={submitHandler}>
				<Input
					ref={accountInputRef}
					label='Account number'
					input={{ id: 'account', type: 'number' }}
				/>
				<Input
					ref={passwordInputRef}
					label='Password'
					input={{ id: 'password', type: 'password' }}
				/>

				<div className={classes.actions}>
					<Button type='submit'>Log in</Button>
					<Button onClick={onSignup} type='button'>
						Create account
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default Login;
