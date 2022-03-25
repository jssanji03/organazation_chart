//import js套件
import 'jquery';
import "bootstrap";
import "orgchart";

//import scss
import './scss/index.scss';

//import 共用 js
import './js/sidebar'
import './pages/organazation'
import { sidebar } from './js/menu';


sidebar()
if (module.hot) {
    module.hot.accept();
 }