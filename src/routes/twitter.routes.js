const express = require('express');
const TwitterService = require('../service/twitter.service')
const HttpStatus = require('http-status');
const badRequest = require('bad-request-error')

const router = express.Router();


router.route('/')
    .get(async (req, res, next) => {
        try{
            res.status(HttpStatus.OK).send(await new TwitterService().listTwitt());

        }catch(e){
            console.log(e)
            res.status(HttpStatus.BAD_REQUEST).send('error');
        }

    })

    .post(async (req, res, next) => {
        try {
            res.status(HttpStatus.OK).send(await new TwitterService().createTwitt(req.body));

        }catch(e){
            res.status(HttpStatus.BAD_REQUEST).send(badRequest);
            next(e)
            console.log(e)
        }
    });

router.route('/:id')

    .delete(async (req, res, next) => {
        try {
            res.status(HttpStatus.OK).send(await new TwitterService().deleteTwitt(req.params));

        }catch(e){
            res.status(HttpStatus.BAD_REQUEST).send(badRequest);

        }
    });

module.exports = router;