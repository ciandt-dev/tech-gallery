package com.ciandt.techgallery.service.model;

/**
 * Response with a technology entity.
 * 
 * @author felipers
 *
 */
public class TechnologyResponse implements Response {

  /** technology id. */
  private Long id;
  /** technology name. */
  private String name;
  /** technology description. */
  private String description;
  /** technology website. */
  private String website;
  /** technology author. */
  private String author;
  /** technology image. */
  private String image;

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

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getWebsite() {
    return website;
  }

  public void setWebsite(String website) {
    this.website = website;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

}
