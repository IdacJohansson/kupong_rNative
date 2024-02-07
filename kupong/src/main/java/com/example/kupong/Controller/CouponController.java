package com.example.kupong.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.kupong.Model.Coupon;
import com.example.kupong.Service.CouponService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/coupons")
public class CouponController {

    private final Logger log = LoggerFactory.getLogger(CouponController.class);

    private final CouponService coupongService;

    @Autowired
    public CouponController(CouponService cupongService) {
        this.coupongService = cupongService;
    }

    @GetMapping("/all")
    public List<Coupon> getAllCupongs() {
        log.info("All coupons ");
        return coupongService.getAllCupongs();
    }
}