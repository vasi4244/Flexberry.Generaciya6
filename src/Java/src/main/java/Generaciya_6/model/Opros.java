package Generaciya_6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Опрос
 */
@Entity(name = "IISGeneraciya_6Опрос")
@Table(schema = "public", name = "Опрос")
public class Opros {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "код")
    private Integer код;

    @Column(name = "название")
    private String название;


    public Opros() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getкод() {
      return код;
    }

    public void setкод(Integer код) {
      this.код = код;
    }

    public String getназвание() {
      return название;
    }

    public void setназвание(String название) {
      this.название = название;
    }


}