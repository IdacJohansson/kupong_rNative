package com.example.kupong.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.kupong.Model.Coupon;

public interface CouponRepo extends JpaRepository<Coupon, Long> {

    Coupon findByCouponId(Long couponId);
}