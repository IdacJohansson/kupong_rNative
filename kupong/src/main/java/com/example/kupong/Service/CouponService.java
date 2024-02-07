package com.example.kupong.Service;
import org.springframework.stereotype.Service;

import com.example.kupong.Model.Coupon;
import com.example.kupong.Repository.CouponRepo;

import java.util.List;

@Service
public class CouponService {

    private final CouponRepo couponRepo;

    public CouponService(CouponRepo cupongRepo) {
        this.couponRepo = cupongRepo; 
    }

    public List<Coupon> getAllCupongs() {
        return couponRepo.findAll();
    }
}