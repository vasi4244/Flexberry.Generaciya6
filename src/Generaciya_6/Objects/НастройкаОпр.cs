﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Generaciya_6
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Настройка опр.
    /// </summary>
    // *** Start programmer edit section *** (НастройкаОпр CustomAttributes)

    // *** End programmer edit section *** (НастройкаОпр CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НастройкаОпрE", new string[] {
            "Опрос as \'Опрос\'",
            "Опрос.название as \'Название\'"}, Hidden=new string[] {
            "Опрос.название"})]
    [AssociatedDetailViewAttribute("НастройкаОпрE", "содержание", "содержаниеE", true, "", "Содержание", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("НастройкаОпрE", "Опрос", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "название")]
    [View("НастройкаОпрL", new string[] {
            "Опрос.название as \'Название\'"})]
    public class НастройкаОпр : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Generaciya_6.Опрос fОпрос;
        
        private IIS.Generaciya_6.DetailArrayOfсодержание fсодержание;
        
        // *** Start programmer edit section *** (НастройкаОпр CustomMembers)

        // *** End programmer edit section *** (НастройкаОпр CustomMembers)

        
        /// <summary>
        /// Настройка опр.
        /// </summary>
        // *** Start programmer edit section *** (НастройкаОпр.Опрос CustomAttributes)

        // *** End programmer edit section *** (НастройкаОпр.Опрос CustomAttributes)
        [PropertyStorage(new string[] {
                "Опрос"})]
        [NotNull()]
        public virtual IIS.Generaciya_6.Опрос Опрос
        {
            get
            {
                // *** Start programmer edit section *** (НастройкаОпр.Опрос Get start)

                // *** End programmer edit section *** (НастройкаОпр.Опрос Get start)
                IIS.Generaciya_6.Опрос result = this.fОпрос;
                // *** Start programmer edit section *** (НастройкаОпр.Опрос Get end)

                // *** End programmer edit section *** (НастройкаОпр.Опрос Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройкаОпр.Опрос Set start)

                // *** End programmer edit section *** (НастройкаОпр.Опрос Set start)
                this.fОпрос = value;
                // *** Start programmer edit section *** (НастройкаОпр.Опрос Set end)

                // *** End programmer edit section *** (НастройкаОпр.Опрос Set end)
            }
        }
        
        /// <summary>
        /// Настройка опр.
        /// </summary>
        // *** Start programmer edit section *** (НастройкаОпр.содержание CustomAttributes)

        // *** End programmer edit section *** (НастройкаОпр.содержание CustomAttributes)
        public virtual IIS.Generaciya_6.DetailArrayOfсодержание содержание
        {
            get
            {
                // *** Start programmer edit section *** (НастройкаОпр.содержание Get start)

                // *** End programmer edit section *** (НастройкаОпр.содержание Get start)
                if ((this.fсодержание == null))
                {
                    this.fсодержание = new IIS.Generaciya_6.DetailArrayOfсодержание(this);
                }
                IIS.Generaciya_6.DetailArrayOfсодержание result = this.fсодержание;
                // *** Start programmer edit section *** (НастройкаОпр.содержание Get end)

                // *** End programmer edit section *** (НастройкаОпр.содержание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройкаОпр.содержание Set start)

                // *** End programmer edit section *** (НастройкаОпр.содержание Set start)
                this.fсодержание = value;
                // *** Start programmer edit section *** (НастройкаОпр.содержание Set end)

                // *** End programmer edit section *** (НастройкаОпр.содержание Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НастройкаОпрE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройкаОпрE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройкаОпрE", typeof(IIS.Generaciya_6.НастройкаОпр));
                }
            }
            
            /// <summary>
            /// "НастройкаОпрL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройкаОпрL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройкаОпрL", typeof(IIS.Generaciya_6.НастройкаОпр));
                }
            }
        }
    }
}
