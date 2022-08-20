# Portfolio Website 

This project is my portfolio. It contains a home page where I talk about myself, a page with some of my projects and a page where you can contact me from. You can check it out [here](https://clarencejulu.github.io/my-portfolio).

## Table of contents
- [Built with](#built-with)
- [What I learnt](#what-i-learnt)
- [Useful resources](#useful-resources)
- [Author](#author)

## Built with

- Semantic HTML5 markup
- SASS (CSS Preprocessor)
- [Font Awesome](https://fontawesome.com/icons/)
- [React](https://reactjs.org/) - JS library
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) - Routing
- [Emailjs.com] - Contact Form

## What I learnt

### Working with local json file in REACT  

1. The json file goes in the public folder. ( "./db.json" )
2. Fetching images I had to use the website's path.

### Storing State in Local Storage based on Conditionals  
  
  In the ThemeProvider, we get the state stored as 'darkmodeStatus'. If nothing has been stored, the state is set to 'theme.light'

```js
const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('darkmodeStatus')) ? JSON.parse(localStorage.getItem('darkmodeStatus')) : themes.light);
```
 
 Then in the target component, check what theme was assigned, then store accordingly.
```js
const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmodeStatus')) === theme.dark); 
```
```js
localStorage.setItem('darkmodeStatus', darkMode ? JSON.stringify(theme.light) : JSON.stringify(theme.dark));
```
### Get Pathname using location  

```js
const location = useLocation();
```
```js
location.pathname === "/my-portfolio/"
```  

### Keyframes Module
```scss
@mixin move($name, $start, $end){
    @keyframes #{$name}{...}
}
```
```scss
@include animations.move(moveBack, 2.75rem, 0.15rem);
animation: moveBack 0.4s ease-in-out forwards;
```
```scss
@include animations.move(move, 0.15rem, 2.75rem);
animation: move 0.4s ease-in-out forwards; 
```

## Useful resources

- [Freeconvert](https://www.freeconvert.com/png-to-webp/) - This helped me convert my images from png to webp format to reduce file size.
- [Zbunet YT Video](https://youtu.be/jOviw8Ou_Yk) - This video showed me how to use EmailJS for my contact form

## Author

- Website - [My Website](https://clarencejulu.github.io/my-portfolio)
- Frontend Mentor - [@clarencejulu](https://www.frontendmentor.io/profile/clarencejulu)
- Github - [My Github](https://github.com/clarencejulu)
- LinkedIn - [My LinkedIn Profile](https://www.linkedin.com/in/clarence-onumajulu/)
