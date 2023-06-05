import './formvalidator.js';
import { getData } from './load.js';
import {renderUsersPhotos} from './draw-pictures.js';
import { showAlert } from './util.js';

getData(renderUsersPhotos, showAlert);
