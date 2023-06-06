import React from 'react';
import { Container } from './components/styled/container.styled';
import {
  Hstack,
  Vstack,
  AreaKeypads,
  Number0, Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9,
  Dot, Plus, Minus, Multiply, Divide, Reset, Equal, Delete,
  Displayscreen,
  StyledCalc,
  ThemeSelection,
  Attribution,
  AttributionA
} from './components/styled/calc.styled';

const Calculator = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme')) || 'default';
    const [rangeValue, setRangeValue] = React.useState(localStorage.getItem('rangeValue')) || 1;
    const [displayValue, setDisplayValue] = React.useState('0');

    React.useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
        setRangeValue(savedTheme === 'default' ? 1 : savedTheme === 'light' ? 2 : 3);
      } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkMode ? 'dark' : 'default');
      }
    }, [setTheme, setRangeValue]);

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
      }, [theme]);

  const handleRangeChange = (e) => {
    const value = Number(e.target.value);
    setRangeValue(value);
    if (value === 1) {
      setTheme('default');
    } else if (value === 2) {
      setTheme('light');
    } else if (value === 3) {
      setTheme('dark');
    }
  };

  const handleButtonClick = (value) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  const handleDeleteClick = () => {
    setDisplayValue((prevDisplayValue) =>
      prevDisplayValue.length > 1
        ? prevDisplayValue.slice(0, prevDisplayValue.length - 1)
        : '0'
    );
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      const formattedResult = parseFloat(result).toFixed(3);
      setDisplayValue(formattedResult.toString());
    } catch (error) {
        console.error('Error calculating result:', error);
        setDisplayValue('Error');
      }
  };

  const formatSeparatorThousands = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Container theme={theme}>
      <StyledCalc theme={theme}>
        <ThemeSelection theme={theme}>
          <p>calc</p>
          <Vstack className='rightsider'>
            <Hstack className='onetwothree'>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </Hstack>
            <Hstack className='theme_slider'>
              <label htmlFor="theme-slider">Theme</label>
              <input
                type="range"
                id="theme-slider"
                min="1"
                max="3"
                value={rangeValue}
                onChange={handleRangeChange}
              />
            </Hstack>
          </Vstack>
        </ThemeSelection>
        <Displayscreen theme={theme}>
          <p>
          {formatSeparatorThousands(displayValue)}
          </p>
        </Displayscreen>
        <AreaKeypads theme={theme}>
          <Number7 theme={theme} onClick={() => handleButtonClick('7')}>7</Number7>
          <Number8 theme={theme} onClick={() => handleButtonClick('8')}>8</Number8>
          <Number9 theme={theme} onClick={() => handleButtonClick('9')}>9</Number9>
          <Delete theme={theme} onClick={handleDeleteClick}>DEL</Delete>
          <Number4 theme={theme} onClick={() => handleButtonClick('4')}>4</Number4>
          <Number5 theme={theme} onClick={() => handleButtonClick('5')}>5</Number5>
          <Number6 theme={theme} onClick={() => handleButtonClick('6')}>6</Number6>
          <Plus theme={theme} onClick={() => handleButtonClick('+')}>+</Plus>
          <Number1 theme={theme} onClick={() => handleButtonClick('1')}>1</Number1>
          <Number2 theme={theme} onClick={() => handleButtonClick('2')}>2</Number2>
          <Number3 theme={theme} onClick={() => handleButtonClick('3')}>3</Number3>
          <Minus theme={theme} onClick={() => handleButtonClick('-')}>-</Minus>
          <Dot theme={theme} onClick={() => handleButtonClick('.')}>.</Dot>
          <Number0 theme={theme} onClick={() => handleButtonClick('0')}>0</Number0>
          <Divide theme={theme} onClick={() => handleButtonClick('/')}>/</Divide>
          <Multiply theme={theme} onClick={() => handleButtonClick('*')}>x</Multiply>
          <Reset theme={theme} onClick={handleClear}>RESET</Reset>
          <Equal theme={theme} onClick={handleCalculate}>=</Equal>
        </AreaKeypads>
      </StyledCalc>
      <footer>
        <Attribution>
          <AttributionA theme={theme}>
            <p><i>Challenge by</i><a href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Calculator app.</a></p>
          </AttributionA>
          <AttributionA theme={theme}>
            <p>&nbsp;&nbsp;<i>Coded by</i><a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
          </AttributionA>
        </Attribution>
      </footer>
    </Container>
  );
};

export default Calculator;