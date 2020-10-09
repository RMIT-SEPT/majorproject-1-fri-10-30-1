package com.rmit.sepy.fri1.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.sql.Time;


@Entity
@Table(name = "booking")
public class Booking {

    /* bookingID formula
       e.g. "2208202"
       first 3 letters of bookingName i.e. scuba -> scu
       date as integers i.e. 22/08/2020 -> 220820
       add booking count i.e. 3rd booking add 2 to id
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "bookingName")
    private String bookingName;

    @Column(name = "workerName")
    private String workerName;

    @Column(name = "startDate")
    private Date startDate;

    @Column(name = "startTime")
    private String startTime;

    @Column(name = "endTime")
    private String endTime;

    public Booking() {
    }

    public Booking(Long id, String bookingName, String workerName, Date startDate, String startTime, String endTime) {
        super();
        this.id = id;
        this.bookingName = bookingName;
        this.workerName = workerName;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Long getId() {return id; }
    public void setId(Long id) { this.id=id; }

    public String getBookingName() {return bookingName; }
    public void setBookingName(String bookingName) { this.bookingName=bookingName; }

    public String getWorkerName() {return workerName; }
    public void setWorkerName(String workerName) { this.workerName=workerName; }

    public Date getStartDate() {return startDate; }
    public void setStartDate(Date startDate) { this.startDate=startDate; }

    public String getStartTime() {return startTime; }
    public void setStartTime(String startTime) { this.startTime=startTime; }

    public String getEndTime() {return endTime; }
    public void setEndTime(String endTime) { this.endTime=endTime; }

}
