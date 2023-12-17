package Generaciya_6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Анкетирование
 */
@Entity(name = "IISGeneraciya_6Анкетирование")
@Table(schema = "public", name = "Анкетирование")
public class Anketirovanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Opros")
    @Convert("Opros")
    @Column(name = "Опрос", length = 16, unique = true, nullable = false)
    private UUID _oprosid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Opros", insertable = false, updatable = false)
    private Opros opros;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Spisok")
    @Convert("Spisok")
    @Column(name = "Список", length = 16, unique = true, nullable = false)
    private UUID _spisokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Spisok", insertable = false, updatable = false)
    private Spisok spisok;


    public Anketirovanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}