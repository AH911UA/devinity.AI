export const selectStyles = {
  control: (base) => ({
    ...base,
    width: '100%',
    border: 0,
    boxShadow: 'none',
    borderRadius: 10,
    background: '#FFFFFF',
    padding: '15px 45px',

    '@media (max-width: 1600px)': {
      padding: '15px 5px',
    }
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => ({
    ...base,
    color: '#000',
    fontSize: 18,
    opacity: isDisabled ? .5 : 1,
    backgroundColor: (isSelected || isFocused) ? '#F8F4FD' : '',
    borderRadius: 10,

    padding: '12px 22px'
  }),
  menu: base => ({
    ...base,
    border: 'none',
    borderRadius: '0px 0px 10px 10px',
    boxShadow: '5px 5px 14px 0px #E5E0EC',

    marginTop: 0,
    padding: '15px 20px',

    '@media (max-width: 1600px)': {
      padding: '15px 5px',
    }
  }),
  menuList: base => ({
    ...base,
    padding: 0
  }),
  singleValue: (base) => ({
    ...base,
    color: '#000000',
    fontSize: 18,
    fontWeight: 300
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#000'
  })
};
