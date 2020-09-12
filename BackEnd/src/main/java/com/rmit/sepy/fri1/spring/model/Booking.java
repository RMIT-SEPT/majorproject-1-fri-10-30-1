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
@table(name = "booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    /* bookingID formula
       e.g. "2208202"
       first 3 letters of bookingName i.e. scuba -> scu
       date as integers i.e. 22/08/2020 -> 220820
       add booking count i.e. 3rd booking add 2 to id
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "bookingName")
    private String bookingName;

    @Column(name = "workerName")
    private String workerName;

    @Column(name = "location")
    private String location;

    @Column(name = "startDate")
    private Date date;

    @Column(name = "startTime")
    private Time startTime;

    @Column(name = "endTime")
    private Time endTime;

    public Booking() {

    }

    public Booking(Integer bookingId, String bookingName, String workerName) {
        super();
        this.bookingId = bookingId;
        this.bookingName = bookingName;
        this.workerName = workerName;
    }


    public Integer getId() {return bookingId; }
    public void setId(Integer bookingId) { this.bookingId=bookingId; }

    public String getBookingName() {return bookingName; }
    public void setBookingName(String bookingName) { this.bookingName=bookingName; }

    public String getWorkerName() {return workerName; }
    public void setWorkerName(String workerName) { this.workerName=workerName; }

    public String getLocation() {return location; }
    public void setlocation(String location) { this.location=location; }

    public Date getDate() {return date; }
    public void setDate(Date date) { this.date=date; }

    public Time getStartTime() {return startTime; }
    public void setStartTime(Time startTime) { this.startTime=startTime; }

    public Time getEndTime() {return endTime; }
    public void setEndTime(Time endTime) { this.endTime=endTime; }

}
