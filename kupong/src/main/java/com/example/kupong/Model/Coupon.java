package com.example.kupong.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Coupon {

    @Id
    @GeneratedValue
    private Long couponId;

    private int couponAmount;
    private boolean isValid;
    private String expirationDate;
    private String couponName;

    public Coupon(int couponAmount, boolean isValid, String expirationDate, String couponName) {
        this.couponAmount = couponAmount;
        this.isValid = isValid;
        this.expirationDate = expirationDate;
        this.couponName = couponName;
    }

    public Long getId() {
        return couponId;
    }

    public String getCouponName() {
        return couponName;
    }

    public void setCouponName(String cupongName) {
        this.couponName = cupongName;
    }

    public void setId(Long couponId) {
        this.couponId = couponId;
    }

    public int getcouponAmount() {
        return couponAmount;
    }

    public void setcouponAmount(int cupongAmount) {
        this.couponAmount = cupongAmount;
    }

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean valid) {
        isValid = valid;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }
}
