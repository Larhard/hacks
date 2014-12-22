// ==UserScript==
// @name         Satori Ranking Highlight
// @namespace    http://elgassia.com/
// @version      0.1
// @description  enter something useful
// @author       Larhard <larhard@gmail.com>
// @match        https://satori.tcs.uj.edu.pl/*
// @grant        none
// ==/UserScript==

name = 'Bartłomiej Puget'

$('div.ranking tr:has(td:contains("' + name + '"))').css('color', '#00ff00').css('background-color', '#000000')
