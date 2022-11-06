import PropTypes from 'prop-types';

export const ingridients = PropTypes.shape({
	_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	proteins: PropTypes.number.isRequired,
	fat: PropTypes.number.isRequired,
	carbohydrates: PropTypes.number.isRequired,
	calories: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	image_mobile: PropTypes.string.isRequired,
	image_large: PropTypes.string.isRequired,
	__v: PropTypes.number.isRequired
});

export const ingridient = PropTypes.shape({
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	onOpen: PropTypes.func.isRequired
})

export const ingridient_details = PropTypes.shape({
	image_large: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	calories: PropTypes.number.isRequired,
	carbohydrates: PropTypes.number.isRequired,
	fat: PropTypes.number.isRequired,
	proteins: PropTypes.number.isRequired
});