/*
 * MlbTeamstatsService.js - Persistent services for Team Statistics.
 *
 * Copyright (c) 2016 DIRECTV, Inc.
 * An Unpublished Work.  All Rights Reserved.
 *
 * DIRECTV PROPRIETARY:  The information contained in or disclosed by this
 * document is considered proprietary by DIRECTV, Inc.  This document and/or the
 * information contained therein shall not be duplicated nor disclosed in whole
 * or in part without the specific written permission of DIRECTV, Inc.
 */

'use strict';

var config = require('../../../config/config');
var logger = require('winston').loggers.get('application');
var N1qlQuery = require('couchbase').N1qlQuery;
var BaseService = require('../BaseService');

class NflTeamstatsService extends BaseService {
	constructor(){
		super();
	}

	/**
	 * Get all ids of MLB TeamStats documents.
	 * @param callback 	function callback 
	 */
	listIds(callback) {	
		var sportSeason = "NFL_" + new Date().getFullYear();
		this.findByQueryString('SELECT META(s).id, s.docId FROM sportsdata s WHERE s.docType="teamstats" AND s.sportSeason="' + sportSeason + '" ORDER BY s.docId;', function(result) {
			callback(result)
		});
	}
}

module.exports = NflTeamstatsService;