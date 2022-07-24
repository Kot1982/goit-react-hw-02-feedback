import PropTypes from 'prop-types';
import {List} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <List>
                {Object.keys(options).map(option => {
                    return (<li key={option}>
                        <button type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
          </li>)    
                }) }
            </List>
        </>
    )
} 

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func,
}