export default {

//Get icon img by weather id
	getIcon(id) {
			if (id >= 200 && id < 300) {
				return 'img/weather_icons/2.png';
			} else if (id >= 300 && id < 400) {
				return 'img/weather_icons/9.png';
			} else if (id >= 500 && id < 600) {
				return 'img/weather_icons/39.png';
			} else if (id >= 600 && id < 700) {
				return 'img/weather_icons/18.png';
			} else if (id >= 700 && id < 800) {
				return 'img/weather_icons/20.png';
			} else if (id === 800) {
				return 'img/weather_icons/32.png';
			} else if (id >= 801 && id < 803) {
				return 'img/weather_icons/34.png';
			} else if (id >= 802 && id < 900) {
				return 'img/weather_icons/26.png';
			} else if (id === 905 || (id >= 951 && id <= 956)) {
				return 'img/weather_icons/23.png';
			} else if (id >= 900 && id < 1000) {
				return 'img/weather_icons/24.png';
			}
		},

//Get day by date
		getDay(d) {
			const DAY_MAP = [
				'Sun',
				'Mon',
				'Tue',
				'Wed',
				'Thu',
				'Fri',
				'Sat'
			];
			// convert seconds to date
			let date = new Date(d*1000);
			let day = date.getDay();
			return DAY_MAP[day];
		},

		getDate(dt) {
			const month = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			];

			// convert seconds to date
			let date = new Date(dt*1000);
			
			let y = date.getFullYear();
			let m = month[date.getMonth()];
			let d = date.getDate();

			let full_date = ''+m+' '+d+', '+y;

			return full_date;
		}
}