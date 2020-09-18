package com.rmit.sepy.fri1.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rmit.sepy.fri1.spring.model.Booking;
import org.springframework.stereotype.Repository;
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

}