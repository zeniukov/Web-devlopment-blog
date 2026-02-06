import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

const IconContainer = ({ className, id, ...props }) => (
	<div className={className} {...props}>
		<FontAwesomeIcon icon={id} />
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '22px' }) => size};
	margin: ${({ margin = '0' }) => margin};
`;
