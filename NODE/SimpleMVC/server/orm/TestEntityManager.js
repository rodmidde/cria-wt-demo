/**
 * User: mdkr
 * Date: 3/23/13
 */
var mongoose = require('mongoose');
var EntityManager = require(__dirname + '/EntityManager.js');

var em = new EntityManager();
em.saveNewPlayer("Teun","SC Bemmel", 1);