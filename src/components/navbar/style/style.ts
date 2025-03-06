import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  nav: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #333;
    color: white;
    width: 100%;
    box-sizing: border-box;
    z-index: 1000;
  `,
  ul: css`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `,
  li: css`
    margin: 0 15px;
    color: #fff;
  `,
  link: css`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    &:hover {
      color: #ffcc00;
    }
  `,
});
