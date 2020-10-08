import styled from 'styled-components';
import { motion } from "framer-motion";

const Switch = styled.div`
    .switch {
        width: 30px;
        height: 20px;
        border-radius: 100px;
        padding: 0 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .on {
        background: ${({ theme }) => theme.primary};
        justify-content: flex-end;
    }

    .off {
        background: ${({ theme }) => theme.lightPrimary};
        justify-content: flex-start;
    }

    .knob {
        width: 12px;
        height: 12px;
        background-color: #ffffff;
        border-radius: 200px;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
    }
`;

export default function Toggle({ isActive, ...props }) {
    return (
        <Switch>
            <motion.div animate className={`switch ${isActive ? "on" : "off"}`} {...props}>
                <motion.div animate className={'knob'} />
            </motion.div>
        </Switch>
    );
}
