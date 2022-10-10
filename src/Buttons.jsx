import { useEffect, useState } from "react";
import fetchData from "./utils/fetchData";


export default function Buttons() {
	const [activePage, setActivePage] = useState(1);
	const [btnStatus, setBtnStatus] = useState({
		previousPage: 'disabled',
		nextPage: '',
	});

	useEffect(() => {
		let apiData = fetchData(
			`https://picsum.photos/v2/list?page=${activePage}&limit=6`,
		);

		if (activePage > 1 && activePage < 13) {
			setBtnStatus({
				previousPage: '',
				nextPage: '',
			});
			return;
		}
		if (activePage === 1) {
			setBtnStatus({
				previousPage: 'disabled',
				nextPage: '',
			});
			return;
		}
		if (activePage === 13) {
			setBtnStatus({
				previousPage: '',
				nextPage: 'disabled',
			});
			return;
		}
	}, [activePage]);

	const handlePage = (pager) => {
		setActivePage((activePage) => activePage + pager);
	};
	return (
		<>
			<div className='btn_group'>
				<button
					className='btn'
					onClick={() => handlePage(-1)}
					disabled={btnStatus.previousPage}
				>
					anterior
				</button>
				<button
					className='btn'
					onClick={() => handlePage(1)}
					disabled={btnStatus.nextPage}
				>
					siguiente
				</button>
			</div>

			<p>pagina: {activePage}</p>
		</>
	);
};
