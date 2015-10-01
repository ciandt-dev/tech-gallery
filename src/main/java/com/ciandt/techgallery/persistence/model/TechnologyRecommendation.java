package com.ciandt.techgallery.persistence.model;

import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Load;
import com.googlecode.objectify.annotation.Unindex;

/**
 * Class of Technology Recommendation
 *
 * @author <a href="mailto:joaom@ciandt.com"> João Felipe de Medeiros Moreira </a>
 * @since 23/09/2015
 *
 */
@Entity
public class TechnologyRecommendation extends BaseEntity<Long> {

  /*
   * Attributes --------------------------------------------
   */
  @Id
  private Long id;

  @Unindex
  private Boolean score;

  @Index
  @Load
  private Ref<TechnologyComment> comment;

  @Index
  private Boolean active;

  @Index
  @Load
  private Ref<TechGalleryUser> recommender;

  @Index
  @Load
  private Ref<Technology> technology;

  /*
   * Constructors -----------------------------------------
   */
  public TechnologyRecommendation() {

  }

  public TechnologyRecommendation(Boolean score, TechnologyComment comment, Boolean active,
      TechGalleryUser recommender, Technology technology) {
    super();
    this.score = score;
    this.comment = Ref.create(comment);
    this.active = active;
    this.recommender = Ref.create(recommender);
    this.technology = Ref.create(technology);
  }

  /*
   * Getter's and Setter's----------------------------------
   */
  @Override
  public Long getId() {
    return this.id;
  }

  @Override
  public void setId(Long id) {
    this.id = id;
  }

  public Boolean getScore() {
    return score;
  }

  public void setScore(Boolean score) {
    this.score = score;
  }

  public Ref<TechnologyComment> getComment() {
    return comment;
  }

  public void setComment(Ref<TechnologyComment> comment) {
    this.comment = comment;
  }

  public Boolean getActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  public Ref<TechGalleryUser> getRecommender() {
    return recommender;
  }

  public void setRecommender(Ref<TechGalleryUser> recommender) {
    this.recommender = recommender;
  }

  public Ref<Technology> getTechnology() {
    return technology;
  }

  public void setTechnology(Ref<Technology> technology) {
    this.technology = technology;
  }
}
