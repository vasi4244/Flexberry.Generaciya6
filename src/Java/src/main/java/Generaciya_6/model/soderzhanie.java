package Generaciya_6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: содержание
 */
@Entity(name = "IISGeneraciya_6содержание")
@Table(schema = "public", name = "содержание")
public class soderzhanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Вопрос")
    private String вопрос;

    @Column(name = "В1")
    private String в1;

    @Column(name = "В2")
    private String в2;

    @Column(name = "В3")
    private String в3;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "NastrojkaOpr")
    @Convert("NastrojkaOpr")
    @Column(name = "НастройкаОпр", length = 16, unique = true, nullable = false)
    private UUID _nastrojkaoprid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "NastrojkaOpr", insertable = false, updatable = false)
    private NastrojkaOpr nastrojkaopr;


    public soderzhanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВопрос() {
      return вопрос;
    }

    public void setВопрос(String вопрос) {
      this.вопрос = вопрос;
    }

    public String getВ1() {
      return в1;
    }

    public void setВ1(String в1) {
      this.в1 = в1;
    }

    public String getВ2() {
      return в2;
    }

    public void setВ2(String в2) {
      this.в2 = в2;
    }

    public String getВ3() {
      return в3;
    }

    public void setВ3(String в3) {
      this.в3 = в3;
    }


}