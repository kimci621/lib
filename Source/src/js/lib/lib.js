import $ from "./modules/core";
import "./modules/display";
import "./modules/classes";
import "./modules/listeners";
import "./modules/actions";
import "./modules/effects";
/*
MyLib v. 1.0

Main foo = $(selector);
What it is doing:
in $.prototype.init(selector) returns new $.prototype.init(selector);
in real work:
new $.prototype.init("selector") copies all methods of $.prototype;

All methods:
$("elem"). - Выбрать элемент по селектору или тэгу
.eq(num) - Выбрать объект под номером
.html("<></>")  - Добавить html структуру
.toggleClass("class") - тоглить класс
.addClass("class") - добавить класс
.removeClass("class") - убрать класс
.show() - показать элемент
.hide() - скрыть элемент
.toggle()  - тоглить элемент по display
.listenerAdd("event", callback) - добавить слушатель
.listenerRemove("event", callback) - убрать слушатель
.eq(selector) - первый элемент по порядку у всех подобных 
.index() - номер элемента  по порядку у всех подобных 
.find(selector) - все подобные по порядку у одного общего родителя
.closest(selector) - ближайший выше по иерархии элемент у всех в селекторе, если его нет, то он сам
.siblings() - все соседи элемента
*/
export default $;