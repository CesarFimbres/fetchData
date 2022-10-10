import { useEffect, useState } from 'react';
import fetchData from './utils/fetchData';

// const apiData = fetchData("https://dog.ceo/api/breeds/image/random/50");

let apiData = fetchData('https://picsum.photos/v2/list?page=1&limit=6');

const Gallery = () => {

  const [activePage, setActivePage] = useState(1);
  const [btnStatus, setBtnStatus] = useState({
		previousPage: 'disabled',
		nextPage: '',
  });

  
  useEffect(() => {

    apiData = fetchData(
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
  }, [ activePage, ])


  const data = apiData.read();

	const handlePage = (pager) => {
    setActivePage((activePage) => activePage + pager);
	}


	return (
		<>
			{/* <p>pagina: {activePage}</p> */}
			<div className='gallery'>
				{data.map((item, index) => (
					<img
						alt={`gallery-img-${index + 1}`}
						src={item}
						key={`gallery-${index + 1}`}
					/>
				))}
			</div>

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
		</>
	);
};

export default Gallery;
