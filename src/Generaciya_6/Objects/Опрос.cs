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
    /// Опрос.
    /// </summary>
    // *** Start programmer edit section *** (Опрос CustomAttributes)

    // *** End programmer edit section *** (Опрос CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОпросE", new string[] {
            "код as \'Код\'",
            "название as \'Название\'"})]
    [View("ОпросL", new string[] {
            "код as \'Код\'",
            "название as \'Название\'"})]
    public class Опрос : ICSSoft.STORMNET.DataObject
    {
        
        private int fкод;
        
        private string fназвание;
        
        // *** Start programmer edit section *** (Опрос CustomMembers)

        // *** End programmer edit section *** (Опрос CustomMembers)

        
        /// <summary>
        /// код.
        /// </summary>
        // *** Start programmer edit section *** (Опрос.код CustomAttributes)

        // *** End programmer edit section *** (Опрос.код CustomAttributes)
        public virtual int код
        {
            get
            {
                // *** Start programmer edit section *** (Опрос.код Get start)

                // *** End programmer edit section *** (Опрос.код Get start)
                int result = this.fкод;
                // *** Start programmer edit section *** (Опрос.код Get end)

                // *** End programmer edit section *** (Опрос.код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Опрос.код Set start)

                // *** End programmer edit section *** (Опрос.код Set start)
                this.fкод = value;
                // *** Start programmer edit section *** (Опрос.код Set end)

                // *** End programmer edit section *** (Опрос.код Set end)
            }
        }
        
        /// <summary>
        /// название.
        /// </summary>
        // *** Start programmer edit section *** (Опрос.название CustomAttributes)

        // *** End programmer edit section *** (Опрос.название CustomAttributes)
        [StrLen(255)]
        public virtual string название
        {
            get
            {
                // *** Start programmer edit section *** (Опрос.название Get start)

                // *** End programmer edit section *** (Опрос.название Get start)
                string result = this.fназвание;
                // *** Start programmer edit section *** (Опрос.название Get end)

                // *** End programmer edit section *** (Опрос.название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Опрос.название Set start)

                // *** End programmer edit section *** (Опрос.название Set start)
                this.fназвание = value;
                // *** Start programmer edit section *** (Опрос.название Set end)

                // *** End programmer edit section *** (Опрос.название Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОпросE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОпросE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОпросE", typeof(IIS.Generaciya_6.Опрос));
                }
            }
            
            /// <summary>
            /// "ОпросL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОпросL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОпросL", typeof(IIS.Generaciya_6.Опрос));
                }
            }
        }
    }
}
