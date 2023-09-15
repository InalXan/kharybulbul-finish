import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {title: 'Khary bulbul - Chocolate house'});
});

router.get('/about', (req, res) => {
	res.render('about', {title: 'Khary bulbul - Chocolate house'});
});

router.get('/gallery', (req, res) => {
	res.render('gallery', {title: 'Khary bulbul - Chocolate house'});
});

router.get('/interier', (req, res) => {
	res.render('interier', {title: 'Khary bulbul - Chocolate house'});
});

router.get('/category', (req, res) => {
	res.render('category', {title: 'Khary bulbul - Chocolate house'});
});

router.get('/contact', (req, res) => {
	res.render('contact', {title: 'Khary bulbul - Chocolate house'});
});

export default router;