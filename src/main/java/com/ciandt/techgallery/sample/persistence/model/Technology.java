package com.ciandt.techgallery.sample.persistence.model;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Load;

@Entity
public class Technology {

  @Id
  Long id;

  @Index
  String name;

  @Load
  List<Key<Recommendation>> recommendations = new ArrayList<Key<Recommendation>>();

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Key<Recommendation>> getRecommendations() {
    return recommendations;
  }

  public void setRecommendations(List<Key<Recommendation>> recommendations) {
    this.recommendations = recommendations;
  }
}