import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { getUsersTransfers } from '../../../store/actions/transfers.actions';

// Components
import TransferItem from '../transfer-item/transfer-item.component';

//import classes from './transfer-history.module.css';


const TransferHistory = () => {
	const transfers = useSelector(state => state.transfers)

	const users = useSelector(state => state.users)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersTransfers(users.user.id));
	}, [dispatch, users.user.id]);

	return (
		<div>
			{transfers &&
				transfers.map(transfer => <TransferItem transfer={transfer} />)}
		</div>
	);
};

export default TransferHistory;
