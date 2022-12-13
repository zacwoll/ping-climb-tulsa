'use strict';
import fetch from 'node-fetch';

exports.run = async (event, context) => {
    const url = 'https://portal.rockgympro.com/portal/public/7348828475f30fc25090be1daf71065e/occupancy?&iframeid=occupancyCounter&fId=';
    const response = await fetch(url);
    const body = await response.text();

    const count_regex = new RegExp('\'count\' : \(.*?\),');
    const OCCUPANCY_COUNT = count_regex.exec(body)[1];

    const last_updated_regex = new RegExp('Last updated:&nbsp.*\\((.*)\\)');
    const LAST_UPDATED = last_updated_regex.exec(body)[1];
    console.log(LAST_UPDATED);

    return OCCUPANCY_COUNT;
};