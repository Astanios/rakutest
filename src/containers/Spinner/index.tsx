import React from 'react';
import { connect } from 'react-redux';
import { StyledSpinner } from './style';
import { isLoadingSelector } from '../../store/movie/selectors';
import { ISpinnerProps } from './models';
const Spinner = ({ isLoading }: ISpinnerProps): React.ReactElement | null => isLoading ? (
  <StyledSpinner viewBox='0 0 50 50'>
    <circle
      className='path'
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth='4'
    />
  </StyledSpinner>
) :
  null;

const mapStateToProps = (state: any) => ({
  isLoading: isLoadingSelector(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spinner);
